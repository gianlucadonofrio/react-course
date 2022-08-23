export const fileUpload = async (file) => {
  if (!file) throw new Error("No tenemos ningun archivo a subir!");
  const cloudURL = "https://api.cloudinary.com/v1_1/dn4pxdjdt/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal-app");
  formData.append("file", file);
  try {
    const resp = await fetch(cloudURL, {
      method: "POST",
      body: formData,
    });
    if (!resp.ok) throw new Error("No se pudieron subir las imagenes");
    const cloudResp = await resp.json();
    console.log({ cloudResp });
    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
