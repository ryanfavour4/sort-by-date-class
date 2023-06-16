console.warn("hello world");

// setInterval(() => {
//   console.log("hey");
// }, 5000);

function getRandomDate(start, end) {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();
  const randomTimestamp = Math.random() * (endDate - startDate) + startDate;
  console.log(randomTimestamp);
  return new Date(randomTimestamp).toISOString();
}

getRandomDate("2022-01-01", "2022-12-31");

const posts = [
  {
    id: "1JStsVecg2Emr4gkfhuX6xRtmUXg6LaXQY",
    title: "Job",
    content: "Release Right Abdomen Muscle, External Approach",
    date: new Date().toISOString(),
    author: "01H3266HYRB3DW2TJVJ6GWBYY5"
  },
  {
    id: "1EWTRQk1rhnda8cCkz4cP3U5xLWj2R9NCm",
    title: "Y-Solowarm",
    content: "Occlusion of R Verteb Vein with Intralum Dev, Open Approach",
    date: new Date().toISOString(),
    author: "01H3266HYR3F09SX6N89618JDS"
  },
  {
    id: "1NM5HmYf7q4K47Bd4gXJ6cYF2iFU9WaR3x",
    title: "Fixflex",
    content: "Repair Portal Vein, Percutaneous Endoscopic Approach",
    date: "3/10/2023",
    author: "01H3266HYQSMP2JRSVP456NGPN"
  },
  {
    id: "1D4ibpyF7Z4BAfk7AtrngWh82CCj4BZupG",
    title: "Greenlam",
    content: "Fusion T-lum Jt w Nonaut Sub, Ant Appr A Col, Perc Endo",
    date: new Date().toISOString(),
    author: "01H3266HYS5A5CEZ6DV1EJ7Z7C"
  },
  {
    id: "13Xu4qQ5CbrRXuQ35y5E5fywDn9gvA7oX1",
    title: "Span",
    content: "Alteration of Left Shoulder Region, Perc Endo Approach",
    date: new Date().toISOString(),
    author: "01H3266HYS512C3MTQJ3NFVQA0"
  }
];

console.log(posts);
const orderedPosts = posts.slice().sort((a, b) => a.date.localeCompare(b.date));
console.log(
  orderedPosts.forEach((element) => {
    console.log(element.date);
  })
);
