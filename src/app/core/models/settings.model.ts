export interface UserSettings {
    id: number;
    email: string;
    displayName: string;
    notificationPreferences: {
      newJobs: boolean;
      applicationUpdates: boolean;
      jobAlerts: boolean;
      weeklyDigest: boolean;
    };
    privacySettings: {
      profileVisibility: string;
      allowRecruiters: boolean;
      showSalary: boolean;
    };
    theme: string;
    language: string;
  }