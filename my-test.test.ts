it('does something', async () => {
  await expect(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('foo'));
      }, 1000)
    })
  }).rejects.toThrow('foo')
})
