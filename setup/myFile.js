// isme hamri vo secret links wgrh h jo ki env file se aa rhi h aur jisko hm export kr rhe h taki dot env se config() k through get kr ske

module.exports = {
  dbUrl: process.env.DB_URL,
  secret: process.env.COOKIE_SECRET,
};
