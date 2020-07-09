module.exports = {
  title: "DUI",
  description: "Hello, DUI!",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `favicon.ico`,
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://google.com" },
      {
        text: "Languages",
        items: [
          {
            text: "Group1",
            items: [
              { text: "Chinese", link: "/language/chinese/" },
              { text: "Japanese", link: "/language/japanese/" },
            ],
          },
          {
            text: "Group2",
            items: [
              { text: "Chinese", link: "/language/chinese/" },
              { text: "Japanese", link: "/language/japanese/" },
            ],
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "Base", // 必要的
       // path: "/foo/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [{
          title: "easy", // 必要的
          // path: "/foo/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
           collapsable: true, // 可选的, 默认值是 true,
           sidebarDepth: 2, // 可选的, 默认值是 1
           children:[["/color-picker", "color-picker"],
           ["/test1", "Test1"],]
        }
        ],
      },
      {
        title: "Extra",
        collapsable: false, // 可选的, 默认值是 true,

        children: [
          ["/test2", "test222"],
          ["/color-picker", "color-picker"],
          ["/test1", "Test1"],
        ],
      },
      {
        title: "More",
        children: [
          ["/test2", "test222"],
          ["/color-picker", "color-picker"],
          ["/test1", "Test1"],
        ],
      },
    ],
    lastUpdated: "Last Updated",
  },
  markdown: {
    lineNumbers: true
  },
  dest: "./examples/docs/.vuepress/dist",
  ga: "",
  evergreen: true,
};
