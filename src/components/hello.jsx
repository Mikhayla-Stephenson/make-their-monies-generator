import { useState } from "react"
import { Progress, Button, Heading, Mark, useHighlight } from "@chakra-ui/react"

export default function Hello() {
  const [yearsWorked, setYearsWorked] = useState(0)
  const billGatesMoney = 145757154000
  const averageAnnualIncome = 68250
  const chunks = useHighlight({
    text: "Bill Gates has $103 billion",
    query: ["$103 billion"],
  })
  const next = useHighlight({
    text: "The average Australian makes $68,250",
    query: ["$68,250"],
  })
  return (
    <div>
      <Heading
        as="h1"
        size="xl"
        mb="1"
      >
        {chunks.map(({ match, text }) => {
          if (!match) return text
          return text === "" ? (
            <Box
              as="u"
              fontFamily="NewYork"
            >
              {text}
            </Box>
          ) : (
            <Mark
              bg="black"
              color="white"
              fontFamily="NewYork"
              px="2"
              py="1"
            >
              {text}
            </Mark>
          )
        })}
      </Heading>
      <Heading
        as="h2"
        size="md"
        mb="5"
      >
        {next.map(({ match, text }) => {
          if (!match) return text
          return text === "" ? (
            <Box
              as="u"
              fontFamily="NewYork"
            >
              {text}
            </Box>
          ) : (
            <Mark
              bg="yellow"
              color="black"
              fontFamily="NewYork"
              px="2"
              py="1"
            >
              {text}
            </Mark>
          )
        })}
      </Heading>

      <h2>Become a self made Billionaire</h2>

      <Button
        onClick={() => {
          setYearsWorked(yearsWorked + 1)
        }}
        bgColor="white"
        colorScheme="black"
        variant="outline"
        my="4"
      >
        Work
      </Button>
      <Heading
        as="h3"
        size="xl"
        my="6"
      >
        <Mark
          bg="yellow"
          color="black"
          fontFamily="NewYork"
          px="2"
          py="1"
        >
          ${averageAnnualIncome * yearsWorked}
        </Mark>
      </Heading>
      <Progress
        value={((averageAnnualIncome * yearsWorked) / billGatesMoney) * 100}
      />
    </div>
  )
}
//68,250 avg
// 145,757,154,000
