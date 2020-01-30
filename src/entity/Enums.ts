import { registerEnumType } from 'type-graphql';

export enum UserJobStatusEnum {
  InProgress = 'In Progress',
  ReadyForDownload = 'Ready For Download',
  WizardCompleted = 'Wizard Completed',
}
registerEnumType(UserJobStatusEnum, {
  name: 'UserJobStatusEnum',
  description: 'All Statuses for a UserJob',
});
