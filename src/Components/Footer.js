import React from 'react';

const getUnsorted=(marks, logicFn)=> {
  const matched = marks.filter(logicFn);
  const first = matched[0] ?? null;
  return { matched, first };
}


const getSorted=(marks, logicFn)=>{
  const sorted = [...marks].sort((a, b) => a - b);
  const matched = sorted.filter(logicFn);
  const first = matched[0] ?? null;
  return { sorted, matched, first };
}

const UnsortedMarksView=({marks, condition})=> {
  const { matched, first } = getUnsorted(marks, condition);

  return (
    <div>
      <h2> Unsorted Marks</h2>
      <p><strong>All Matches:</strong> {matched.length > 0 ? matched.join(", ") : "None"}</p>
      <p><strong>First Match:</strong> {first ?? "None found"}</p>
    </div>
  );
}

const SortedMarksView=({marks, condition})=> {
  const { sorted, matched, first } = getSorted(marks, condition);

  return (
    <div>
      <h2> Sorted Marks</h2>
      <p><strong>Sorted:</strong> {sorted.join(", ")}</p>
      <p><strong>All Matches:</strong> {matched.length > 0 ? matched.join(", ") : "None"}</p>
      <p><strong>First Match:</strong> {first ?? "None found"}</p>
    </div>
  );
}


const Footer=()=> {
  const studentMarks = [64, 60, 55, 76, 38, 50, 72];
  const condition = (mark) => mark > 60;

  return (
    <div>
      <h1> Sorted and Unsorted</h1>
      <UnsortedMarksView marks={studentMarks} condition={condition} />
      <SortedMarksView marks={studentMarks} condition={condition} />
    </div>
  );
}

export default Footer;
