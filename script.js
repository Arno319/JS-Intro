console.log('het werkt')

// werken met functies, oude notaties
// berekn volgende som : 1 + 2+ 3 + ... + LaatsteGetal
function somGetallen(LaatsteGetal) {
    let som = 0                                             // startwaarde
    for(let i = 1; i <= LaatsteGetal; i++){
        som += i;
    }
    return som;
}


    // test
    // 1 + 2 + 3 -> 6
    console.log(`de som 1 + 2 + 3 is ${somGetallen(3)}`)
    console.log(`de som 1 + 2 + 3 + 4 is ${somGetallen(4)}`)
    console.log(`de som 1 + 2 + 3 + ... is ${somGetallen(1000000)}`)

    // vette pijl notatie
    const somGetallen2 = LaatsteGetal => {
        let som = 0                                             // startwaarde
        for(let i = 1; i <= LaatsteGetal; i++){
            som += i;
        }
        return som;
    }
    console.log(`de som 1 + 2 + 3 is ${somGetallen2(3)}`)