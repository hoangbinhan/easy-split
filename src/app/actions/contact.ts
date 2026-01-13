"use server";

interface ContactState {
  success: boolean;
  message: string;
}

export async function sendContactEmail(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate fields
  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all fields." };
  }

  // Use Web3Forms API (Free & Works on Cloudflare Edge)
  // You need to get an Access Key from https://web3forms.com/
  const ACCESS_KEY =
    process.env.WEB3FORMS_ACCESS_KEY || "dd1e2440-345e-4c49-bb4a-808918fffa25";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://easysplit.click",
        Origin: "https://easysplit.click",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        name,
        email,
        message,
        subject: `New Contact from Easy Split: ${name} (${email})`,
        from_name: "Easy Split Contact Form",
      }),
    });

    const result = (await response.json()) as {
      success: boolean;
      message?: string;
    };

    if (result.success) {
      return { success: true, message: "Email sent successfully!" };
    } else {
      console.error("Web3Forms API Error:", result);
      return {
        success: false,
        message: result.message || "Failed to send email. Please try again.",
      };
    }
  } catch (error) {
    console.error("Submission Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
