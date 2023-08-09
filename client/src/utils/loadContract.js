import contract from '@truffle/contract'


export const loadContract = async (name, provider) => {
    const res = await fetch(`contract/${name}.json`)
    const Artifact = await res.json()

    return contract(Artifact)
}