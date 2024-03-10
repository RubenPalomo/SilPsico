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
        text: `*Nombre:* ${formData.name} ${formData.lastName}
        ${formData.phone && `\n*Teléfono:* ${formData.phone}`}
        ${
          formData.email && `\n*Email:* ${formData.email}`
        }\n\n*Motivo de consulta:* ${
          formData.text
        }\n\nPrefiere hablar por *${formData.option.toLowerCase()}*`,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!response.ok) return false;
  else return true;
};
