import type { Metadata } from "next"
import styles from "./page.module.css"
import Image from "next/image";

export const metadata: Metadata = {
  title: "Understanding TypeScript Interfaces",
  description: "Learn how to use TypeScript interfaces to build a simple web page",
}

export default function TypeScriptInterfacesPost() {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>Understanding TypeScript Interfaces 🐝</h1>
      <p className={styles.lead}>
        In the world of TypeScript, interfaces are like the intricate patterns found in a beehive. They define the
        structure of objects, much like how the hexagonal cells define the structure of a honeycomb.
      </p>
      <h2 className={styles.heading}>Materials for this workshop</h2>
      <p>
        If you would like to get hands on with the theory below, you can with this public GitHub repo. Please FORK the repo first before cloning it down locally. You can access it {""} 
        <a
            href="https://github.com/Maddy-bee/beeline-interface-workshop"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            here.
          </a>
      </p>
      <h2 className={styles.heading}>What are TypeScript Interfaces?</h2>
      <p>
        Interfaces in TypeScript are a powerful way to define the shape of an object. They're like a blueprint that
        specifies which properties and methods an object should have.
      </p>
      <pre className={styles.codeBlock}>
        <code>
          {`interface Bee {
  name: string;
  role: string;
  wings: number;
  canSting: boolean;
}`}
        </code>
      </pre>
      <p>
        In this example, we've defined an interface for a Bee. Any object that implements this interface must have a
        name, role, number of wings, and whether it can sting.
      </p>
      <h2 className={styles.heading}>Using Interfaces in Your Code</h2>
      <p>Once you've defined an interface, you can use it to type-check objects in your code:</p>
      <pre className={styles.codeBlock}>
        <code>
          {`function describeBee(bee: Bee) {
  console.log(\`\${bee.name} is a \${bee.role} bee with \${bee.wings} wings. Can it sting? \${bee.canSting ? 'Yes' : 'No'}.\`);
}

const workerBee: Bee = {
  name: "Buzzy",
  role: "worker",
  wings: 4,
  canSting: true
};

describeBee(workerBee);`}
        </code>
      </pre>
      <h2 className={styles.heading}>Extending Interfaces</h2>
      <p>Like how different types of bees share common characteristics, interfaces can extend other interfaces:</p>
      <pre className={styles.codeBlock}>
        <code>
          {`interface Insect {
  name: string;
  wings: number;
}

interface Bee extends Insect {
  role: string;
  canSting: boolean;
}

const queenBee: Bee = {
  name: "Queen Beatrice",
  wings: 4,
  role: "queen",
  canSting: true
};`}
        </code>
      </pre>
      <p>
        In this example, the Bee interface extends the Insect interface, adding more specific properties while
        inheriting the common ones.
      </p>
      <h2 className={styles.heading}>Readonly properties</h2>
      <p>What if you do not want your property to be modified after its initial assignment? You can mark it as readonly. </p>
      <pre className={styles.codeBlock}>
        <code>
          {`interface Bee {
  readonly species: string
  description: string
  pollinationEfficiency: number
}`}
        </code>
      </pre>
      <p>
        In this example, the species has been defined as a readonly property. 
      </p>
      <h2 className={styles.heading}>Optional properties</h2>
      <p>Now you want to list whether your bee is an endangered species, but only under specific circumstances. You can define an optional property using '?'.</p>
      <pre className={styles.codeBlock}>
        <code>
          {`interface Bee {
  readonly species: string
  description: string
  pollinationEfficiency: number
  endangeredStatus?: string
}`}
        </code>
      </pre>
      <p>
        In this example, the endangeredstatus property has been defined as optional. Here are the related objects:
      </p>
      <pre className={styles.codeBlock}>
        <code>
          {`const bees: Bee[] = [
  {
    species: "Honey Bee",
    description: "The most common bee in British gardens",
    pollinationEfficiency: 0.8,
  },
  {
    species: "Bumblebee",
    description: "Large, fuzzy bees with a distinctive buzz",
    pollinationEfficiency: 0.9,
    endangeredStatus: "Vulnerable",
  },
  {
    species: "Mason Bee",
    description: "Solitary bees that nest in hollow stems",
    pollinationEfficiency: 0.95,
  },
]`}
        </code>
      </pre>
      <h2 className={styles.heading}>Duck Typing</h2>
      <p>You know the old saying, that if it quacks like a duck, it must be a duck? It can be applied within TypeScript as well. You can create an object like this one here:  </p>
      <pre className={styles.codeBlock}>
        <code>
          {`const duckBee = {
  species: "Carpenter Bee",
  description: "A type of large, solitary bee",
  pollinationEfficiency: 0.85,
  endangeredStatus: "Least Concern",
};`}
        </code>
      </pre>
      <p>
         The duckBee object is not explicity typed as Bee. However, it contains all of the properties expected, so it will be treated the same as the Bee interface in TypeScript. 
      </p>
      <h2 className={styles.heading}>Your Turn</h2>
      <p>Try and apply the knowledge from this introduction by populating interfaces in this repository. You can also see an application of Duck typing as well. Scroll down on this page to find the answers.</p>
      <h2 className={styles.heading}>Conclusion</h2>
      <p>
        TypeScript interfaces are a fundamental tool for creating robust and maintainable code. They help catch errors
        early and make your code more self-documenting. Just as bees work together to maintain the structure of their
        hive, interfaces help maintain the structure and integrity of your TypeScript code ecosystem.
      </p>
      <Image src="/images/bee.webp" alt="Image of a bee" className={styles.image} width={400} height={300}/>
      <h2 className={styles.heading}>Answers for the interface workshop</h2>
      <p>Flowers</p>
      <pre className={styles.codeBlock}>
        <code>
          {`interface Flower {
  readonly name: string
  scientificName: string
  floweringSeason: string[]
  colors: string[]
  nectarRating?: number
}`}
        </code>
      </pre>
      <p>Butterflies</p>
      <pre className={styles.codeBlock}>
        <code>
          {`interface Butterfly {
  readonly name: string
  wingspanCm: number
  colors: string[]
  migratoryPattern?: string
}`}
        </code>
      </pre>
      <p>Ladybirds</p>
      <pre className={styles.codeBlock}>
        <code>
          {`interface Ladybird {
  readonly species: string
  spotCount: number
  primaryColor: string
  beneficialPrey: string[]
  invasiveStatus?: boolean
}
`}
 </code>
 </pre>
 <p>Birds</p>
      <pre className={styles.codeBlock}>
        <code>
          {`export interface Bird {
  readonly species: string
  habitat: string[]
  wingspan: number
  diet: string[]
}`}
 </code>
 </pre>
    </article>
  )
}

