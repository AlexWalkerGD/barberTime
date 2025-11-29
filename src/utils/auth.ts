export const isAdmin = (user: any) => {
  const adminEmails = ["alexwalkerpt@outlook.com", "alexwalker0019@gmail.com"];
  return user && adminEmails.includes(user.email);
};
