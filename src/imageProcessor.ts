const fs = require('fs');
const path = require('path');

function fileWalker(dir: string, done: any) {
  let results: string[] = [];

  fs.readdir(dir, function(err: any, list: any[]) {
    if (err) return done(err);

    var pending = list.length;

    if (!pending) return done(null, results);

    list.forEach(function(file) {
      file = path.resolve(dir, file);

      fs.stat(file, function(_err: any, stat: any) {
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]
          results.push(file);

          fileWalker(file, function(_err: any, res: any) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);

          if (!--pending) done(null, results);
        }
      });
    });
  });
}

export const getImages = (): Promise<IImageFile[]> => {
  return new Promise<IImageFile[]>((resolve, reject) => {
    fileWalker(path.resolve(`D:\\Website (New 2000x2000)\\images`), async (err: any, data: any) => {
      if (err) {
        reject(err);
      }

      if (data && data.length) {
        let fileInfos: any[] = [];
        for (let filePath of data) {
          const folder = filePath.substring(filePath.indexOf('D:\\Website (New 2000x2000)\\images') + 'D:\\Website (New 2000x2000)\\images'.length + 1);
          const fileParts = folder.split('\\');
          fileInfos.push({
            diskPath: filePath,
            webUrl: `http://assets.mylibertyfurn.com/images/${folder.replace('\\', '/')}`,
            folderAndImage: folder,
            category: fileParts[0],
            image: fileParts[1],
          });
        }
        resolve(fileInfos);
      } else {
        reject('no data');
      }
    });
  });
};

export interface IImageFile {
  diskPath: string;
  webUrl: string;
  folderAndImage: string;
  category: string;
  image: string;
}
