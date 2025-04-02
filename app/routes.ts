import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("project", "routes/project.tsx"),
  route("award", "routes/award.tsx"),
] satisfies RouteConfig;
