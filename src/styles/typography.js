export const fonts = {
  primary: `Roboto`,
};

export const typography = {
  regular: {
    xs: `
    font-size: 0.75rem;
    line-height: 1rem;
    `,
    sm: `
    font-size: 0.875rem;
    line-height: 1.5rem;
    `,
    md: `
    font-size: 1rem;
    line-height: 1.5rem;
    `,
    lg: `
    font-size: 1.25rem;
    line-height: 2rem;
    `,
    xl: `
    font-size: 1.875rem;
    line-height: 2.5rem;
    `,
  },
  head: {
    xs: `
    font-size: 0.75rem;
    line-height: 1rem;
    `,
    sm: `
    font-size: 0.875rem;
    line-height: 1.5rem;
    `,
    md: `
    font-size: 1rem;
    line-height: 1.5rem;
    `,
    lg: `
    font-size: 1.25rem;
    line-height: 2rem;
    `,
    xl: `
    font-size: 1.875rem;
    line-height: 2.5rem;
    `,
  },
  button: {
    lg: `
    font-size: 1rem;
    line-height: 1.5rem;
    `,
    md: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    `,
    sm: `
    font-size: 0.75rem;
    line-height: 1rem;
    
    `,
  },
};

for (const size in typography.regular) {
  typography.regular[size] += `
  font-family: ${fonts.primary};
  font-weight: 400;
  text-transform: uppercase;
  `;
}

for (const size in typography.head) {
  typography.head[size] += `
  font-family: ${fonts.primary};
  font-weight: 700;
  text-transform: uppercase;
  `;
}

for (const size in typography.button) {
  typography.button[size] += `
  font-family: ${fonts.primary};
  font-weight: 400;
  text-transform: uppercase;
  `;
}
