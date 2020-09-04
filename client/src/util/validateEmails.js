const expressao = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => expressao.test(email) === false);

  if (invalidEmails.lenght) {
    return `Os seguintes e-mails são inválidos: ${invalidEmails}`;
  }

  return;
};
