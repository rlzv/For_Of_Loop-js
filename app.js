const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}


for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}

for (let char of "hello") {
    console.log(char)
}