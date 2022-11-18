//
// export function initApp(securityFacadeService: SecurityFacadeService, credentialsService: CredentialsService): () => Promise<boolean | void> {
//   return () => securityFacadeService.getPermissionMatrices().toPromise().catch(error => {
//     credentialsService.setCredentials();
//     window.location.reload();
//   });
// }
