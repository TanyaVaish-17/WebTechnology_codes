
// let x=60; this will give error , since redefinition is not possible with let keyword.

// Variable shadowing
{
    let y=10;
    console.log(y);
    {
        // let y=70;
        let z=50;
        console.log(y);
        console.log(z);
    }
}