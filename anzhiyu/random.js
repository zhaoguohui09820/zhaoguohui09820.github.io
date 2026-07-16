var posts=["2024/08/13/行走在云端，感受日落的美/","2024/07/18/“仙人”的画作/","2024/07/29/加入我的Minecraft 服务器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };