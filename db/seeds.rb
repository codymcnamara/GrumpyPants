Blog.create!([
  {user_id: 1, title: "First World Problems", filepicker_url: "https://www.filepicker.io/api/file/iA2YnVMAQOqqKU0guJFi"},
  {user_id: 2, title: "Small Arms Big Problems", filepicker_url: "https://www.filepicker.io/api/file/JNuSvF6aTnuhzq6jYOy2"},
  {user_id: 3, title: "Go Away", filepicker_url: "https://www.filepicker.io/api/file/dT2E6bAzTLusjvuOhGYj"},
  {user_id: 4, title: "Girl Problems", filepicker_url: "https://www.filepicker.io/api/file/2lrz0sYtRsSvtYDTwZ7T"},
  {user_id: 5, title: "I so tired of being alone", filepicker_url: "https://www.filepicker.io/api/file/53vreCMrSZGc3wC4pguk"},
  {user_id: 6, title: "Let's get Grumpy", filepicker_url: nil}
])
Following.create!([
  {follower_id: 6, blog_id: 5},
  {follower_id: 6, blog_id: 3},
  {follower_id: 6, blog_id: 4},
  {follower_id: 6, blog_id: 2},
  {follower_id: 6, blog_id: 1}
])
Post.create!([
  {blog_id: 1, title: "shower probs", body: "", post_url: "https://www.filepicker.io/api/file/KWuiEDS9uRECXjfwvFLw"},
  {blog_id: 1, title: "it's gonna bother me so much", body: "", post_url: "https://www.filepicker.io/api/file/ROweqJDOQqCfvip9mS9g"},
  {blog_id: 1, title: "making food", body: "", post_url: "https://www.filepicker.io/api/file/KCmTrKRITkeogPQ5RZRe"},
  {blog_id: 2, title: "I can never be a gymnast", body: "", post_url: "https://www.filepicker.io/api/file/UHFr2ZSuRCjcbcnHcvIQ"},
  {blog_id: 3, title: "boats", body: "", post_url: "https://www.filepicker.io/api/file/gLDry7jTEW3eNhSn2aqN"},
  {blog_id: 3, title: "Long Walks", body: "", post_url: "https://www.filepicker.io/api/file/r8x6jNhsRteoENtgKKJh"},
  {blog_id: 4, title: "I'm divorcing my first wife ", body: "later girl", post_url: nil},
  {blog_id: 4, title: "I'm gonna execute my second wife", body: "Is that taking it too far?", post_url: nil},
  {blog_id: 4, title: "My third wife died :(", body: "RIP", post_url: "https://www.filepicker.io/api/file/u34bPoxRBqGbx6ngJrG5"},
  {blog_id: 4, title: "My fourth wife just isn't working out", body: "German princesses aren't good enough for me", post_url: nil},
  {blog_id: 4, title: "Number 5 is getting beheaded ", body: "Is it me??", post_url: nil},
  {blog_id: 4, title: "6th time is a charm", body: "hello annie", post_url: "https://www.filepicker.io/api/file/T9jvg8bITp2poywJug8C"},
  {blog_id: 5, title: "How am i still single?", body: "", post_url: "https://www.filepicker.io/api/file/hQqwNEWFTtaJrVYCCxx7"},
  {blog_id: 6, title: "Snow White's Overrated ", body: "She's not as cool off the set", post_url: nil}
])
User.create!([
  {session_token: "deAFAaHae75Kk9_SCiHAZg", username: "FirstWorldGirl", email: "life@hard.com", password_digest: "$2a$10$RsMl8iBpKmZ4BxxaExB28.i/TnY4jyp52DwNXt4NWUdjlTKe7veU2"},
  {session_token: "R4Az-njTgaqgwyKRMvYzug", username: "T-Rex", email: "big@mouth.org", password_digest: "$2a$10$tu8D8zoFgq7.Y/nIz6N3r.E6VzWlkq0XBmFop9e1HqpkQE0yASy4m"},
  {session_token: "iqewSMBordsro06kfE95Rw", username: "GrumpyCat", email: "go@away.com", password_digest: "$2a$10$2oWA0A4QZ72AoNltvEn9aexvVGHSI2Ny3JrysUqpqqb6hbpstoXpy"},
  {session_token: "iTNvAfQ26aBgZW782NTS5Q", username: "Henry VIII", email: "king@england.uk", password_digest: "$2a$10$MCFyFXYh9Je5BJNeKEiqEuvpL3I3uV0xaSxdbCnKfjCCZN7Sv69fG"},
  {session_token: "2zDJiRoR2_0OSdGL-YtxUw", username: "Al Green", email: "solonely@soul.org", password_digest: "$2a$10$2nw9nfMQFYfMWs4N0EHw8u4LzKPM0B20JrCSGZsj4zdqLa3SKF.sW"},
  {session_token: "fic9dUeUPoN-1JSAtoX0vA", username: "Grumpy_Guest", email: "grump@pants.com", password_digest: "$2a$10$4ThSziRU32WXgLijai5mzuwo/4CZohctqRebrBBpXcRdcaRK30eJy"}
])
