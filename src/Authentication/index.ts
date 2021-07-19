import { assets as onboardingAssets } from './Onboarding';
import { assets as welcomeAssets } from './Welcome';
export { default as Onboarding } from "./Onboarding";
export { default as Welcome } from "./Welcome";
export { default as Login } from "./Login";
export { default as Signup } from "./Signup";
export { default as ForgetPassword } from './ForgetPassword'


export const assets = [...onboardingAssets, ...welcomeAssets]