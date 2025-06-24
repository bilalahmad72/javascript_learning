function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched successfully");
    }, 2000);
  });
}

function fetchCommentsData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comments data fetched successfully");
    }, 3000);
  });
}

async function getPostAndComments() {
  try {
    // console.log("Fetching post data...");
    // const postData = await fetchPostData();
    // console.log(postData);
    // console.log("Fetching comments data...");
    // const commentsData = await fetchCommentsData();
    // console.log(commentsData);

    console.log("Fetching Data....");

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentsData(),
    ]);

    console.log("Post Data:", postData);
    console.log("Comments Data:", commentData);

    console.log("Fetch Data Completed...");
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

getPostAndComments();
