/**
 * 从 itemElement 中抽离出所有的 imgElements
 */
export const getImgElements = (itemElements) => {
  const imgElements = [];
  itemElements.forEach((el) => {
    imgElements.push(...el.getElementsByTagName("img"));
  });
  return imgElements;
};

/**
 * 生成所有的图片链接数组
 */
export const getAllImg = (itemElements) => {
  return itemElements.map((imgElement) => {
    return imgElement.src;
  });
};

/**
 * 监听图片数组加载完成
 */
export const onComplateImgs = (imgs) => {
  // promise 集合
  const promiseAll = [];

  // 循环 imgs 构建 promiseAll
  imgs.forEach((img, index) => {
    promiseAll[index] = new Promise((resolve, reject) => {
      // 处理 img 的加载情况
      const imageObj = new Image();
      imageObj.src = img;
      imageObj.onload = () => {
        resolve({
          img,
          index,
        });
      };
    });
  });
  return Promise.all(promiseAll);
};
