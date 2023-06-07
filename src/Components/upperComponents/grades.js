import GradeCard from "../../UI/gradeCard";

const education = [
  {
    id: "a1",
    main: "9.24",
    desc1: "CGPA",
    desc2: "in B.Tech",
  },
  {
    id: "a2",
    main: "95%",
    desc1: "in",
    desc2: "Sr. Secondary",
  },
  {
    id: "a3",
    main: "91%",
    desc1: "in",
    desc2: "Secondary",
  },
];

const Grades = () => {
  return (
    <>
      {education.map((edu) => (
        <GradeCard
          key={edu.id}
          main={edu.main}
          desc1={edu.desc1}
          desc2={edu.desc2}
        />
      ))}
    </>
  );
};

export default Grades;
