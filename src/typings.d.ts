// Include mod module level typings for rollup build
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
