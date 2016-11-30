export class Variable {
  constructor (opts = {}) {
    this.opts = opts
  }

    Type m_type;
    int m_idx; /// index into value vector
    double& valRef();


    friend class VariableManager;
    friend struct SchemaHelper;
  public:
    /// variable has an input port
    bool lhs() const {
      return m_type==flow || m_type==tempFlow;}
    /// variable is a temporary
    bool temp() const {
      return type()==tempFlow || type()==undefined;}
    /// returns true if variable's data is allocated on the flowVariables vector
    bool isFlowVar() const {
      return m_type!=stock && m_type!=integral;
    }


    Type type() const {return m_type;}

    /// the initial value of this variable
    std::string init;

    bool godleyOverridden;
    std::string name; // full marked up name of this variable

    double value() const {
      return const_cast<VariableValue*>(this)->valRef();
    }
    int idx() const {return m_idx;}

    VariableValue(Type type=VariableType::undefined, const std::string& name="", const std::string& init=""):
      m_type(type), m_idx(-1), init(init), godleyOverridden(0), name(name) {}

    const VariableValue& operator=(double x) {valRef()=x; return *this;}
    const VariableValue& operator+=(double x) {valRef()+=x; return *this;}
    const VariableValue& operator-=(double x) {valRef()-=x; return *this;}

    /// allocate space in the variable vector. @returns reference to this
    VariableValue& allocValue();

    /// evaluates the initial value, based on the set of variables
    /// contained in \a VariableManager. \a visited is used to check
    /// for circular definitions
    double initValue
    (const VariableValues&, std::set<std::string>& visited) const;
    double initValue(const VariableValues& v) const {
      std::set<std::string> visited;
      return initValue(v, visited);
    }
    void reset(const VariableValues&);

    /// check that name is a valid valueId (useful for assertions)
    static bool isValueId(const std::string& name) {
      return name.length()>1 && name.substr(name.length()-2)!=":_" &&
        boost::regex_match(name, boost::regex(R"((constant)?\d*:[^:\s\\{}]+)"));
    }

    /// construct a valueId
    static std::string valueId(int scope, std::string name) {
      if (scope<0) return ":"+stripActive(uqName(name));
      else return str(scope)+":"+stripActive(uqName(name));
    }
    static std::string valueId(std::string name) {
      return valueId(scope(name), name);
    }

    /// extract scope from a qualified variable name
    /// @throw if name is unqualified
    static int scope(const std::string& name);
    /// extract unqualified portion of name
    static std::string uqName(const std::string& name);
}
