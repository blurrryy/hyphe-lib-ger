const hyphe = require("./hyphe-lib-ger");

test("Return an empty string when passing no arguments", done => {
  hyphe().then(string => {
    expect(string).toBe(``);
    done();
  });
});

test("Return an empty string when passing an empty string with default options", done => {
  const testString = "";
  hyphe(testString).then(string => {
    expect(string).toBe(``);
    done();
  });
});

test("Output with default options", done => {
  const testString = "Hello World";
  hyphe(testString).then(string => {
    expect(string).toBe(`Hel&#173;lo&#32;World`);
    done();
  });
});

test("Output should ignore unknown options", done => {
  const testString = "Hello World";
  hyphe(testString, { giveMeAnError: true }).then(string => {
    expect(string).toBe(`Hel&#173;lo&#32;World`);
    done();
  });
});

test("Given an option should not ignore the other default options", done => {
  const testString = "Hello World";
  hyphe(testString, { ignoreLineBreaks: true }).then(string => {
    expect(string).toBe(`Hel&#173;lo&#32;World`);
    done();
  });
});

test("Correct use of typographizer-js and default options", done => {
  const testString = "Ich fragte: 'Wie geht es dir?'";
  hyphe(testString).then(string => {
    expect(string).toBe(
      `Ich&#32;frag&#173;te&#58;&#32;&#8216;Wie&#32;geht&#32;es&#32;dir&#63;&#39;`
    );
    done();
  });
});

test("Correct use of typographizer-js and without HTML output", done => {
  const testString = `Ich fragte: "Wie geht es dir?"`;
  hyphe(testString, { escapeToHTML: false }).then(string => {
    expect(string).toBe(`Ich frag­te: "Wie geht es dir?"`);
    done();
  });
});
