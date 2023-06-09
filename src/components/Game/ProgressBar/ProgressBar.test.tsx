import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ProgressBar } from './index';

describe('Renders ProgressBar', () => {
    let setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
    let setTotalTime: React.Dispatch<React.SetStateAction<number>>;

    beforeEach(() => {
        setCurrentScore = jest.fn();
        setTotalTime = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should render Progressbar with width of (totaltime-1)*10', () => {
        let totalTime = 10
        render(<ProgressBar start={false} currentScore={0} setCurrentScore={setCurrentScore} totalTime={totalTime} setTotalTime={setTotalTime} />);
        const progressbarContainer = screen.getByTestId('progressbar-container');
        const progressbar = screen.getByTestId('progressbar');

        expect(progressbarContainer).toBeInTheDocument();
        expect(progressbar).toBeInTheDocument();
        expect(progressbar).toHaveStyle(`width: ${((totalTime-1)*10)}%`);
    });

});
