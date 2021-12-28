import { act, renderHook } from '@testing-library/react-hooks';
import useExternalScript from './use-external-script';
import { IStates } from '@mehenwal/business-logic'

describe('useExternalScript', () => {
  it.skip('if able to load jQuery slim minified', () => {

    // <script
    //   src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
    //   integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="
    //   crossorigin="anonymous"
    // ></script>

    const scriptURL = "https://code.jquery.com/jquery-3.6.0.slim.min.js"
    const { result } = renderHook(() => useExternalScript(scriptURL));

    expect(result.current).toBe(0);

    // act(() => {
    //   result.current.increment();
    // });

    // expect(result.current.count).toBe(1);
  });

  it('if no external sourceURL is supplied', () => {
    let { result } = renderHook(() => useExternalScript('some-url'));
    console.dir(result.all)

    act(() => {
      const { result } = renderHook(() => useExternalScript('some-url'));
      console.dir(result.all)
    });
    expect(result.current).toEqual(IStates.Loading);
    // expect(result.current).toEqual("loading");
  });
});
