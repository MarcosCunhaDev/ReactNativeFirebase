export interface IUser {
  multiFactor: {enrolledFactors: []};
  metadata: {lastSignInTime: number; creationTime: number};
  photoURL: null|string;
  phoneNumber: null|string;
  tenantId: null|string;
  displayName: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  uid: string;
  email: string;
  providerData: [
    {
      email: string;
      providerId: string;
      photoURL: null|string;
      phoneNumber: null|string;
      displayName: string;
      uid: string;
    },
  ];
  providerId: string;
}