// import { Parser } from 'json2csv';
import * as converter from 'json-2-csv';
import * as fs from 'fs';
import { ProductData } from '../entity/ProductData';
import * as path from 'path';
// import archiver from 'archiver';
var archiver = require('archiver');
// import * as rimraf from 'rimraf';
// const { promisify } = require('util');
// const stat = promisify(fs.stat);
// const mkdir = promisify(fs.mkdir);
const fsPromises = fs.promises;

// var zipdir = require('zip-dir');

export const jsonToCsvFile = async (data: ProductData[], filePath: string, fileName: string): Promise<string | null> => {
  try {
    const csvData = await converter.json2csvAsync(data);
    return new Promise(async (resolve, reject) => {
      if (!(await isDirectoryAsync(filePath))) {
        await fsPromises.mkdir(filePath, { recursive: true });
      } else {
        // clear folder
        await deleteFilesInFolder(filePath);
      }

      try {
        const physicalFile = path.join(filePath, fileName);
        await fsPromises.writeFile(physicalFile, csvData, 'utf8');
        resolve(physicalFile);
      } catch (ex) {
        console.log('jsonToCsvFile', ex.message);
        reject(ex.message);
      }
    });
  } catch (ex) {
    console.log(ex.message);
    return null;
  }
};

export const zipFiles = async (directory: string, fileName: string): Promise<string | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const zipName = directory + fileName;
      const fileArray = await getDirectoryList(directory),
        output = fs.createWriteStream(zipName),
        archive = archiver('zip');

      output.on('end', function() {
        console.log('Data has been drained');
        // do cleanup
        // cleanUp(dir);
        resolve(zipName);
      });

      archive.pipe(output);

      fileArray.forEach(function(item) {
        var file = item.path + item.name;
        archive.append(fs.createReadStream(file), { name: item.name });
      });

      archive.finalize();
      resolve(zipName);
    } catch (ex) {
      console.log(ex.message);
      reject(ex.message);
    }
  });
};

export const zipFilesByGlob = async (directory: string, outputDirectory: string, fileName: string): Promise<string | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(directory);
      console.log(fileName);
      const zipName = outputDirectory + fileName;
      const fileArray = await getDirectoryList(directory),
        output = fs.createWriteStream(zipName),
        archive = archiver('zip');

      output.on('end', function() {
        console.log('Data has been drained');
        // do cleanup
        // cleanUp(dir);
        resolve(zipName);
      });

      archive.pipe(output);

      console.log('fileArray', fileArray.length);
      for (let item of fileArray) {
        var file = item.path + item.name;
        console.log('file, item', file, item);
        archive.append(fs.createReadStream(file), { name: item.name });
      }

      archive.finalize();
      // zipdir(directory, { saveTo: `../../../${fileName}` }, function(err: any, _buffer: any) {
      //   if (err) {
      //     console.log(err);
      //     reject(err);
      //   }
      //   resolve('done');
      //   // `buffer` is the buffer of the zipped file
      //   // And the buffer was saved to `~/myzip.zip`
      // });

      // const zipName = directory + fileName;
      // console.log('zipName', zipName);
      // const output = fs.createWriteStream(zipName),
      //   archive = archiver('zip');

      // output.on('end', function() {
      //   console.log('Data has been drained');
      //   // do cleanup
      //   // cleanUp(dir);
      //   resolve(zipName);
      // });

      // archive.pipe(output);

      // // fileArray.forEach(function(item) {
      // //   var file = item.path + item.name;
      // //   archive.append(fs.createReadStream(file), { name: item.name });
      // // });
      // // const glob = `${directory}**\\*.jpg`;
      // console.log('directory', directory);
      // // archive.directory(directory);
      // archive.directory(directory);
      // archive.glob(directory);
      // // await archive.bulk([{ expand: true, cwd: directory, src: ['**'], dest: directory }]);

      // archive.finalize();
      resolve(zipName);
    } catch (ex) {
      console.log('!!!!!!!!!!!!!!!!!!!!! ex', ex.message);
      reject(ex.message);
    }
  });
};

export const zipFilesByDirectory = async (directory: string, outputDirectory: string, fileName: string): Promise<string | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(directory);
      console.log(outputDirectory);
      console.log(fileName);

      const zipName = outputDirectory + fileName;
      const output = fs.createWriteStream(zipName),
        archive = archiver('zip');

      output.on('end', function() {
        console.log('Data has been drained');
        // do cleanup
        // cleanUp(dir);
        //resolve(zipName);
      });

      archive.pipe(output);

      output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
        resolve(zipName);
      });

      archive.on('warning', function(err: any) {
        if (err.code === 'ENOENT') {
          // log warning
          console.log('WARNING: [ENOENT]', err);
          throw err;
        } else {
          // throw error
          throw err;
        }
      });

      archive.on('error', function(err: any) {
        console.log('ERROR: ', err);

        throw err;
      });

      archive.directory(directory, 'images');
      archive.finalize();
    } catch (ex) {
      console.log('!!!!!!!!!!!!!!!!!!!!! ex', ex.message);
      reject(ex.message);
    }
  });
};

// const cleanUp = (directory: string) => {
//   rimraf(directory, function(err) {
//       console.log(err);
//   });
// };

export const getDirectoryList = async (dir: string): Promise<IFileNameAndPath[]> => {
  var fileArray: IFileNameAndPath[] = [],
    files = await fsPromises.readdir(dir);

  files.forEach(file => {
    var obj = { name: file, path: dir };
    fileArray.push(obj);
  });
  return fileArray;
};

export const deleteFilesInFolder = async (directory: string): Promise<boolean> => {
  try {
    const files: string[] = await fsPromises.readdir(directory);
    for (const file of files) {
      await fsPromises.unlink(path.join(directory, file));
    }
    return true;
  } catch (ex) {
    console.log('deleteFilesInFolder', ex.message);
    return false;
  }
};

export const isErrorNotFound = (err: any) => {
  return err.code === 'ENOENT';
};

export const isDirectoryAsync = async (path: string): Promise<boolean> => {
  // the result can be either false (from the caught error) or it can be an fs.stats object
  try {
    const result: fs.Stats = await fsPromises.stat(path);
    return result.isDirectory();
  } catch (ex) {
    console.log('isDirectoryAsync', ex.message);
    if (isErrorNotFound(ex)) {
      return false;
    }
    return false;
  }
};

export const getFileSizeInBytes = (filePath: string) => {
  const stats = fs.statSync(filePath);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};

export const getFileSizeInMegabytes = (filePath: string) => {
  return getFileSizeInBytes(filePath) / 1000000.0;
};

export interface IFileNameAndPath {
  name: string;
  path: string;
}
// const checkDirectory = async (directory: string): Promise<boolean> => {
//   try {
//     await stat(directory);
//     return true;
//   } catch (ex) {
//     if (ex.errno && ex.errno === 34) {
//       const dir = await mkdir(directory);
//       return dir ? true : false;
//     } else return false;
//   }
// };
