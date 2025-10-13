class WrongSolution:
    def numJewelsInStones(self, jewels, stones):
        c = 0

        for s in stones:
            for s in jewels: c += 1

        return c
    

    # wrong weay to do it O =(M * N)


class CorrectSolution:
    def numJewelsInStones(self, jewels, stones):
        c = 0

        jewels = set([j for j in jewels])

        for s in stones:
            if s in jewels: c += 1

        return c
    
    # O = (M + N)