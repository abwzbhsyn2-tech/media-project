const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");


const prisma = new PrismaClient({

});



async function main(){


const passwordHash = await bcrypt.hash(
"admin123",
10
);



await prisma.user.deleteMany();


const user = await prisma.user.create({

data:{

username:"admin",

password:passwordHash,

name:"Administrator"

}

});


console.log("User created:", user);


}



main()

.catch((e)=>{

console.error(e);

})

.finally(async()=>{

await prisma.$disconnect();

});