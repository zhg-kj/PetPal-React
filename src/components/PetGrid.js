import { PetCard }from "./PetCard";

const fakeData = [
  { name: "Fluffy", type: "Dog", age: 3, size: "Medium", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390475488960662/IMG_8724.jpg?ex=65347cd8&is=652207d8&hm=c1e21b24fcf89c258d919a21f8c5829196bea02c643ff44e4b9d12c4c2e1cf62&" },
  { name: "Max", type: "Dog", age: 2, size: "Large", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390476130689095/IMG_8722.jpg?ex=65347cd8&is=652207d8&hm=6a4992ee1ba32e2360dbab0282295d47940def70db78c40e3c7fa67de54b96bf&" },
  { name: "Buddy", type: "Dog", age: 1, size: "Small", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390476441059421/IMG_8721.jpg?ex=65347cd8&is=652207d8&hm=9e0100c23261f61c7c79c0c5b24b6d069a373f425944c70f2ffd244443951909&" },
  { name: "Charlie", type: "Dog", age: 4, size: "Medium", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390476705316924/IMG_8720.jpg?ex=65347cd8&is=652207d8&hm=d7a3305b49cb96f731540b8667394f185056a529a25af182e8b4d9f22ef96bfd&" },
  { name: "Lucy", type: "Dog", age: 2, size: "Small", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160394707487166615/IMG_8725.jpg?ex=653480c9&is=65220bc9&hm=238ba50bcd4b74cef0e49b07203fc1801b67551e0e0454bf0fa9d7e7ca56e19d&" },
  { name: "Bailey", type: "Dog", age: 5, size: "Large", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390476130689095/IMG_8722.jpg?ex=65347cd8&is=652207d8&hm=6a4992ee1ba32e2360dbab0282295d47940def70db78c40e3c7fa67de54b96bf&" },
  { name: "Daisy", type: "Dog", age: 3, size: "Medium", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390475488960662/IMG_8724.jpg?ex=65347cd8&is=652207d8&hm=c1e21b24fcf89c258d919a21f8c5829196bea02c643ff44e4b9d12c4c2e1cf62&" },
  { name: "Luna", type: "Dog", age: 1, size: "Small", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160400324801085569/1696731393818.jpg?ex=65348604&is=65221104&hm=d395fc3cad5a45e426628a5c238efd0c21aa209a0061b7010b329bcf143cf5f2&" },
  { name: "Cooper", type: "Dog", age: 2, size: "Large", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390476441059421/IMG_8721.jpg?ex=65347cd8&is=652207d8&hm=9e0100c23261f61c7c79c0c5b24b6d069a373f425944c70f2ffd244443951909&" },
  { name: "Sadie", type: "Dog", age: 4, size: "Medium", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160394707487166615/IMG_8725.jpg?ex=653480c9&is=65220bc9&hm=238ba50bcd4b74cef0e49b07203fc1801b67551e0e0454bf0fa9d7e7ca56e19d&" },
  { name: "Whiskers", type: "Cat", age: 2, size: "Small", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390475853856859/IMG_8723.jpg?ex=65347cd8&is=652207d8&hm=4e7e1d0e266f8745457a6223cffb9677dfd049bef09ea6ce8fe989ae624e306c&" },
  { name: "Mittens", type: "Cat", age: 3, size: "Small", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390477078601839/IMG_8719.jpg?ex=65347cd8&is=652207d8&hm=253ffd88d48281d7408eb67141427a1e5726a2bd2022b641064c7350c9833ea2&" },
  { name: "Tiger", type: "Cat", age: 5, size: "Medium", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390477326057583/IMG_8718.jpg?ex=65347cd8&is=652207d8&hm=c748dff8e7a93e149f33c5cbb138ca5a7c1b7587d7e68405963ffdd8495a763f&" },
  { name: "Lily", type: "Cat", age: 1, size: "Small", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390477577732136/IMG_8717.jpg?ex=65347cd8&is=652207d8&hm=55c92fb6fddaea23c382914cb145d6ac58b122c82602bca35c674f6f544ec2ac&" },
  { name: "Simba", type: "Cat", age: 4, size: "Medium", image: "https://cdn.discordapp.com/attachments/861479282915803137/1160390477858734221/3f0d721ce3b7de169a9781c35487d4fe.jpg?ex=65347cd8&is=652207d8&hm=f0963275f0f004d271b713571c2e21e8e57b8a64f10557df77ff3f5212b0d0cb&" },
];

export const PetGrid = () => {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <div className="grid gap-4">
          {fakeData.map((pet, index) => {
            if (index % 3 === 0) {
              return (
                <PetCard pet={pet} />
              );
            }
            return <></>
          })}
        </div>
      </div>
      <div>
        <div className="grid gap-4">
          {fakeData.map((pet, index) => {
            if (index % 3 === 1) {
              return (
                  <PetCard pet={pet} />
              );
            }
            return <></>
          })}
        </div>
      </div>
      <div>
        <div className="grid gap-4">
          {fakeData.map((pet, index) => {
            if (index % 3 === 2) {
              return (
                  <PetCard pet={pet} />
              );
            }
            return <></>
          })}
        </div>
      </div>
    </div>
  );
}