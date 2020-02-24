import { a } from './exporter';

import type { Foo } from './exporter';

test("it should parse", () => {
    const q: Foo = { a };
    expect(q.a).toBe(1);
});
