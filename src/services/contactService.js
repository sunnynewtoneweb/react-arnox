// export const sendContactForm = async (formData) => {
//   const response = await fetch("http://localhost/react-arnox/send.php", {
//     method: "POST",
//     body: formData,
//   });

//   return await response.json();
// };

// export const sendContactForm = async (data) => {
//   // Backend ke bina testing ke liye
//   return { type: "success" };
// };

export const sendContactForm = async (data) => {
  const response = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    body: data,
  });

  return response.json();
};