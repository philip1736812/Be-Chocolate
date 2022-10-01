export const getHorizontalPic = async (pictureArr) => {
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const asyncFilter = async (arr, predicate) => {
    const results = await Promise.all(arr.map(predicate));

    return arr.filter((_v, index) => results[index]);
  };

  const resPic = await asyncFilter(pictureArr, async (pic, i) => {
    const img = new Image();
    await sleep(10);
    img.src = pic;

    return img.naturalWidth >= img.naturalHeight;
  });

  return resPic;
};
