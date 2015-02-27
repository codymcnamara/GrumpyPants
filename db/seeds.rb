Blog.create!([
  {user_id: 1, title: "First World Problems", filepicker_url: "https://www.filepicker.io/api/file/iA2YnVMAQOqqKU0guJFi"},
  {user_id: 2, title: "My Arms Are Too Small", filepicker_url: "https://www.filepicker.io/api/file/JNuSvF6aTnuhzq6jYOy2"},
  {user_id: 3, title: "Go Away", filepicker_url: "https://www.filepicker.io/api/file/dT2E6bAzTLusjvuOhGYj"},
  {user_id: 4, title: "Girl Problems", filepicker_url: "https://www.filepicker.io/api/file/2lrz0sYtRsSvtYDTwZ7T"},
  {user_id: 5, title: "I'm so tired of being alone", filepicker_url: "https://www.filepicker.io/api/file/53vreCMrSZGc3wC4pguk"},
  {user_id: 6, title: "Can't Stop Pouting", filepicker_url: nil}
])
Following.create!([
  {follower_id: 6, blog_id: 5},
  {follower_id: 6, blog_id: 3},
  {follower_id: 6, blog_id: 4},
  {follower_id: 6, blog_id: 2},
  {follower_id: 6, blog_id: 1}
])
Post.create!([
  {blog_id: 1, title: "it's gonna bother me so much", body: "", post_url: "https://www.filepicker.io/api/file/ROweqJDOQqCfvip9mS9g"},
  {blog_id: 3, title: "Long Walks", body: "", post_url: "https://www.filepicker.io/api/file/r8x6jNhsRteoENtgKKJh"},
  {blog_id: 1, title: "making food", body: "", post_url: "https://www.filepicker.io/api/file/KCmTrKRITkeogPQ5RZRe"},
  {blog_id: 2, title: "I can never be a gymnast", body: "", post_url: "https://www.filepicker.io/api/file/UHFr2ZSuRCjcbcnHcvIQ"},
  {blog_id: 1, title: "shower probs", body: "", post_url: "https://www.filepicker.io/api/file/KWuiEDS9uRECXjfwvFLw"},
  {blog_id: 5, title: "How am i still single?", body: "", post_url: "https://www.filepicker.io/api/file/hQqwNEWFTtaJrVYCCxx7"},
  {blog_id: 3, title: "boats", body: "", post_url: "https://www.filepicker.io/api/file/gLDry7jTEW3eNhSn2aqN"},
  {blog_id: 6, title: "Snow White's Overrated ", body: "She's not as cool off the set", post_url: nil},
  {blog_id: 5, title: "Lonely Times", body: "I guess you know that I, uh, I love you so. Even though you don't want me no more. Hey hey hey hey, I'm cryin' tears. All through the years I'll tell ya like it is. Honey, love me if you will. Yeah baby. Tired of being alone here by myself, now I tell ya, I'm tired baby. I'm tired of being all wrapped up late at night In my dreams, nobody but you, baby", post_url: nil},
  {blog_id: 2, title: "Not happy", body: "", post_url: "https://www.filepicker.io/api/file/gW23wDE2SmW3iCYHTg0A"},
  {blog_id: 3, title: "so bad", body: "", post_url: "https://www.filepicker.io/api/file/A5wRkxVwTEdqKPWUEbdr"},
  {blog_id: 2, title: "Almost there...", body: "", post_url: "https://www.filepicker.io/api/file/WCqyy6RTS6lnTbOaqYfQ"},
  {blog_id: 1, title: "What am I gonna do now?", body: "", post_url: "https://www.filepicker.io/api/file/49PxhWESS8GvRFPXxoN5"},
  {blog_id: 3, title: "Neighbors", body: "", post_url: "https://www.filepicker.io/api/file/m4lVL40IT9OtoVHTpsA0"},
  {blog_id: 4, title: "I'm divorcing my first wife ", body: "later girl", post_url: nil},
  {blog_id: 4, title: "I'm gonna execute my second wife", body: "Is that taking it too far?", post_url: nil},
  {blog_id: 4, title: "My third wife died :(", body: "RIP", post_url: "https://www.filepicker.io/api/file/u34bPoxRBqGbx6ngJrG5"},
  {blog_id: 4, title: "My fourth wife just isn't working out", body: "German princesses aren't good enough for me", post_url: nil},
  {blog_id: 4, title: "Number 5 is getting beheaded ", body: "Is it me??", post_url: nil},
  {blog_id: 4, title: "6th time is a charm", body: "hello annie", post_url: "https://www.filepicker.io/api/file/T9jvg8bITp2poywJug8C"},
  {blog_id: 2, title: "I'm gonna get wet today ;(", body: "", post_url: "https://www.filepicker.io/api/file/BREF4xRaSnaEbtubw94d"}
])
User.create!([
  {session_token: "KE5MTchtszKtSSj-PvpaHg", username: "FirstWorldGirl", email: "life@hard.com", password_digest: "$2a$10$RsMl8iBpKmZ4BxxaExB28.i/TnY4jyp52DwNXt4NWUdjlTKe7veU2"},
  {session_token: "g7VscJdnKowjkECI4EYsGQ", username: "T-Rex", email: "big@mouth.org", password_digest: "$2a$10$tu8D8zoFgq7.Y/nIz6N3r.E6VzWlkq0XBmFop9e1HqpkQE0yASy4m"},
  {session_token: "pJou_BP1M0HFZwECnjEpuw", username: "GrumpyCat", email: "go@away.com", password_digest: "$2a$10$2oWA0A4QZ72AoNltvEn9aexvVGHSI2Ny3JrysUqpqqb6hbpstoXpy"},
  {session_token: "iTNvAfQ26aBgZW782NTS5Q", username: "Henry VIII", email: "king@england.uk", password_digest: "$2a$10$MCFyFXYh9Je5BJNeKEiqEuvpL3I3uV0xaSxdbCnKfjCCZN7Sv69fG"},
  {session_token: "rP0_YpB4tyQcT-Q3dRHipA", username: "Al Green", email: "solonely@soul.org", password_digest: "$2a$10$2nw9nfMQFYfMWs4N0EHw8u4LzKPM0B20JrCSGZsj4zdqLa3SKF.sW"},
  {session_token: "CuCoX5JNBhxXX4d3mVBFdA", username: "Guest", email: "grumpy@pants.com", password_digest: "$2a$10$4ThSziRU32WXgLijai5mzuwo/4CZohctqRebrBBpXcRdcaRK30eJy"}
])
