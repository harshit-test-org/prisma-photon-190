import Photon from '@generated/photon'

const photon = new Photon()

// A `main` function so that we can use async/await
async function main() {
  const bars = await photon.users.findMany({
    where: {
      id: {
        notIn: [],
      },
    },
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
