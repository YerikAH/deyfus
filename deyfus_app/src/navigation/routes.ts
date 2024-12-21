export enum RoutesApp {
  Register = 'Register',
  Login = 'Login',
  Intro = 'Intro',
  RecoverPassword = 'RecoverPassword',
  Tabs = 'Tabs',
}
export enum RoutesTabs {
  Dashboard = 'Dashboard',
  Scan = 'Scan',
  Products = 'Products',
}

export type RootStackParamList = {
  [RoutesApp.Register]: undefined;
  [RoutesApp.Login]: undefined;
  [RoutesApp.Tabs]: undefined;
  [RoutesApp.Intro]: undefined;
  [RoutesApp.RecoverPassword]: undefined;
};

export type TabParamList = {
  [RoutesTabs.Dashboard]: undefined;
  [RoutesTabs.Products]: undefined;
  [RoutesTabs.Scan]: undefined;
};
