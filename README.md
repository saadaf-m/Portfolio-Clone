# Portfolio-Clone
The goal of this project is to clone my current portfolio website using tailwindCSS.

# Why?
Why are you building out the same project again? Well, there's two reasons. The primary one is that my first website was built with Desktop-first approach, but I'd like to build it mobile-first. Tailwind is designed to make mobile-first development easy. Second is just because I've grown a liking towards tailwind. I think it's pretty cool

# Journal
- 08/23/24: It was not intentional, though important, I realised I'm reverse engineering my own website. It's more so interesting that it's one of my own.

# Experiences
- Responsive Web Design with a mobile-first approach
- Analyze and deconstruct a website to understand its design and functionality; reverse-engineering my own website
- Understanding of how different technologies work together improving problem-solving skills
- Challenges of cloning a website with a mobile-first approach that was originally built with a desktop-first approach
  - E.g., Approach
    - Examine #profile-description from mobile query POV
    - From mobile query, some properties are not overridden and therefore mobile query has some desktop query props
    - After translating default (props outside of any query), go back and revise each query from smallest to largest and adjust or unset props
  - E.g., Thoughts
    - If you override a style in a media query, that style will remain unless overridden by a larger query.
    - That said, this seems to be a complication that only occurs if a project was built desktop first.
