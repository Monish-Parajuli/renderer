import S from "fluent-json-schema";
import { Pdf } from "./render";

const healthHandler = async () => {
  return { status: "ok" };
};

const schema = {
  body: S.object().prop("url", S.string().required()),
};

const renderHandler = async (req) => {
  return await Pdf({ url: req.body.url });
};

export default async function routes(api) {
  api.get("/health", healthHandler);
  api.post("/render", { schema }, renderHandler);
}
