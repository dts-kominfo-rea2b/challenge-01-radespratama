// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: "Rades",
  gender: "L",
  age: 20,
  email: "rades@dingdong.com",
  favoriteColor: Array.from(new Set(["White", "Black", "Brown", "Gray"])),
  isHavePet: true,
  education: [
    {
      name: "SD 01",
      city: "Badung",
      graduate: "2013",
    },
    {
      name: "SMP 05",
      city: "Denpasar",
      graduate: "2016",
    },
    {
      name: "SMK Bali Dewata",
      city: "Denpasar",
      graduate: "2019",
    },
  ],
  favoriteRestaurant: Array.from(
    new Set([
      "Bento",
      "Sushi",
      "Pancake",
      "Eggy",
      "Tempura",
      "Bento",
      "Eggy",
      "Padang",
      "Tteok",
      "Sushi",
      "Sushi",
    ])
  ),
};

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 17,
  email: "wendy@dingdong.com",
  favoriteColor: Array.from(new Set(["Blue", "Black", "Grey"])),
  isHavePet: false,
  education: [
    {
      name: "SD 02",
      city: "Jakarta",
      graduate: 2010,
    },
    {
      name: "SMP 03",
      city: "Bogor",
      graduate: 2013,
    },
    {
      name: "SMA 01",
      city: "Surabaya",
      graduate: 2016,
    },
    {
      name: "Universitas Maju",
      city: "Tangerang",
      graduate: null,
    },
  ],
  favoriteRestaurant: Array.from(
    new Set([
      "Tempura",
      "Bento",
      "Sushi",
      "Pancake",
      "Padang",
      "Katsu",
      "Geprek",
      "Pancake",
      "Eggy",
    ])
  ),
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
