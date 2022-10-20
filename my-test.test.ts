it('does something', async () => {
  jest.useFakeTimers()

  await expect(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Promise.reject(new Error('foo'))
  }).rejects.toThrow('foo')
})
