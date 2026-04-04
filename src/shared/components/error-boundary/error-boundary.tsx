import { Component, type ReactNode } from 'react';
import { ErrorFallback } from '@components/error-boundary/error-fallback.tsx';

interface IProps {
    children: ReactNode;
}

interface IState {
    error: Error | null;
    hasError: boolean;
}

export class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            error: null,
            hasError: false,
        };
        this.handleReset = this.handleReset.bind(this);
    }

    static getDerivedStateFromError(error: Error): IState {
        return { hasError: true, error };
    }

    private handleReset() {
        this.setState({
            error: null,
            hasError: false,
        });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <ErrorFallback
                    error={this.state.error}
                    resetErrorBoundary={this.handleReset}
                />
            );
        }

        return this.props.children;
    }
}
