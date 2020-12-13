package CMSC589.CustomException;

public class LackTitleException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = -8309663620979723567L;

    public LackTitleException() {
        super("Lack of title in the input.");
    }

}