import { v4 as uuidv4 } from "uuid";
function data() {
  return [
    {
      name: "Lovin' Me (feat. Phoebe Bridgers)",
      cover:
        "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/hcjrqlvc6dfhpjxob9nt/cudi",
      artist: "Kid Cudi",
      audio:
        "https://24naijamusicfiles.com/wp-content/uploads/2020/12/Kid_Cudi_Ft_Phoebe_Bridgers_-_Lovin_Me.mp3?_=1",
      color: ["#F75460", "#5546D8"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Dead Man Walking",
      cover:
        "https://i0.wp.com/www3.24naijamuzic.com/wp-content/uploads/2020/09/1600434897_d048dba11169c4a3075ff81b104f7af6.jpg?w=960&ssl=1://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Brent Faiyaz",
      audio:
        "https://24naijamusicfiles.com/wp-content/uploads/2020/09/Brent_Faiyaz_-_Dead_Man_Walking.mp3",
      color: ["#EFEADF", "#834E0D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Snowchild",
      cover:
        "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/n0igst4jkcqxwztkqp9o/the-weeknd-after-hours",
      artist: "The Weeknd",
      audio:
        "https://24naijamusicfiles.com/wp-content/uploads/2020/03/The_Weeknd_-_Snowchild.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "M.O.B",
      cover:
        "https://i1.wp.com/www2.24naijamuzic.com/wp-content/uploads/2020/05/Brockhampton-3.jpg?w=960&ssl=1",
      artist: "BROCKHAMPTON",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default data;
