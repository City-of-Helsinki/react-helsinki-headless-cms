/**
 * Tests if an image at a given URL loads successfully,
 * using AbortController for clean event listener management.
 *
 * @param {string} [url] - The URL of the image to test.
 * @return {Promise<void>} - A promise that resolves if the image loads, and rejects otherwise.
 */
const testImage = (url?: string): Promise<void> => {
  if (!url) {
    return Promise.reject(new Error('No image URL given'));
  }

  const imgElement = new Image();
  // Create the controller instance
  const controller = new AbortController();
  const { signal } = controller;

  return new Promise<void>((resolve, reject) => {
    // The { signal } option ensures these listeners are grouped for cleanup
    imgElement.addEventListener(
      'load',
      () => {
        controller.abort(); // Triggers removal of ALL listeners attached to this signal
        resolve();
      },
      { signal },
    );

    imgElement.addEventListener(
      'error',
      () => {
        controller.abort(); // Triggers removal of ALL listeners attached to this signal
        // Reject with a standard Error object
        reject(new Error(`Failed to load image from URL: ${url}`));
      },
      { signal },
    );

    imgElement.src = url;
  });
  // Note: The controller is self-contained and cleaned up when the promise resolves/rejects
};

export default testImage;
