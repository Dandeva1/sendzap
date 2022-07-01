import gracefulShutdown from "http-graceful-shutdown";
import app from "./app";
import { initIO } from "./libs/socket";
import { logger } from "./utils/logger";
import { StartAllWhatsAppsSessions } from "./services/WbotServices/StartAllWhatsAppsSessions";

import swaggerUi from "swagger-ui-express";

import swaggerDocs from "./swagger.json"

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const server = app.listen(process.env.PORT, () => {
  logger.info(`Server started on port: ${process.env.PORT}`);
});

initIO(server);
StartAllWhatsAppsSessions();
gracefulShutdown(server);
