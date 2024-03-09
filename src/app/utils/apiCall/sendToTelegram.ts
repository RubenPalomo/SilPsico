import { FormDataType } from "../models/formDataType";

export const sendToTelegram = async (
  formData: FormDataType
): Promise<boolean> => {
  const TELEGRAM_TOKEN = "1463801315:AAEB1RxxzEOFsyh4n2hESsrPZjESRMfhJFE";
  const TELEGRAM_ID = "460235397";

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_ID,
        text: `*Nombre:* ${formData.name} ${formData.lastName}\n*Teléfono:* ${formData.phone}`,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!response.ok) return false;
  else return true;
};
